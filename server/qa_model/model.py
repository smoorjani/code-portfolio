""" Utilities to load in model pipeline and ask questions. """

from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
from .constants import CONTEXT, QUESTIONS, MODEL_NAME

def get_model(model_name: str = MODEL_NAME) -> AutoModelForQuestionAnswering:
    '''
    Retrieves transformers model from model name.

    :param model_name: string of model name to load
    :returns: model for question answering
    '''
    return AutoModelForQuestionAnswering.from_pretrained(model_name)

def get_tokenizer(model_name: str = MODEL_NAME) -> AutoTokenizer:
    '''
    Retrieves transformers model's tokenizer from model name.

    :param model_name: string of model to retrieve tokenizer
    :returns: tokenizer for model
    '''
    return AutoTokenizer.from_pretrained(model_name)

def get_pipeline(model_name: str = MODEL_NAME) -> pipeline:
    '''
    Creates pipeline for question answering with model name.

    :param model_name: string of model to use in pipeline
    :returns: pipeline for question answering
    '''
    print('Loading question-answer pipeline...')
    return pipeline('question-answering',
                    model=get_model(model_name),
                    tokenizer=get_tokenizer(model_name))

def answer_question(nlp: pipeline, question: str) -> dict:
    '''
    Answers inputted question given a pipeline.
    Sample output:
    {'score': 0.5119690305189595, 'start': 152, 'end': 179, 'answer': 'natural language processing'}

    :param nlp: pipeline to feed question into
    :param question: string representing question
    :returns: dictionary of answer along with other info
    '''
    QA_input = {
        'question': question,
        'context': CONTEXT
    }
    try:
        return nlp(QA_input)
    except KeyError:
        return {'error': 'Issue with question. Try another!'}

if __name__ == '__main__':
    nlp = get_pipeline(MODEL_NAME)

    for q in QUESTIONS:
        try:
            print(answer_question(nlp, q))
        except Exception:
            continue
        