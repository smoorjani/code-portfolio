""" Flask backend for my code portfolio """

import json
from flask_cors import CORS
from flask import Flask, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from .db.db_utils import PostgresEngine
from .qa_model.model import get_pipeline, answer_question
from .qa_model.constants import MODEL_NAME

app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["2000 per day", "100 per hour"]
)
CORS(app)

nlp = get_pipeline(MODEL_NAME)
engine = PostgresEngine(filename='db/database.ini', section="postgresql")

def add_questionanswer(question: str, answer: str) -> bool:
    """
    Insert a question answer pair to the database

    :param question: question to insert
    :param answer: respective answer to insert
    :returns: bool indicating whether insert was successful
    """
    query = "INSERT INTO QuestionAnswer(question, answer) VALUES (%s, %s);"
    return engine.insert_db(query, (question.lower(), answer,))

def get_answer(question: str) -> tuple:
    """
    Retrieve an answer for a question from the database

    :param question: question to check against db
    :returns: answer from db
    """
    query = "SELECT answer FROM QuestionAnswer WHERE question = %s"
    data = (question.lower(), )
    return engine.query_db(query, data)

@app.route('/get-question', methods=['GET', 'POST'])
def get_question():
    """
    Retrieves answer for a question
    """
    if request.method == "POST":
        data = request.data

        if data:
            data = json.loads(data.decode("utf-8").replace("'", '"'))
            question = data['question']
            answer = get_answer(question)

            if not answer:
                model_output = answer_question(nlp, question)
                answer = model_output['answer']

                add_questionanswer(question, answer)

                if not answer:
                    return {'answer': 'Sorry, I can\'t answer that.'}

                return {'answer': answer}

            return {'answer': answer[0]}
        return "Invalid data passed."
    return "Use POST to communicate with this endpoint."

# if __name__ == '__main__':
#     print(get_answer(conn, "How old are you?"))
#     conn.close()
