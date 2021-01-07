"""
Utility to initialize the database from a schema.sql file.
DO NOT RUN THIS IF YOU HAVE NOT BACKED UP YOUR DATA!
"""

from psycopg2 import DatabaseError
from .db_utils import get_connection

def create_tables(conn, schema: str) -> bool:
    """
    Create tables for the database.

    :param conn: connection to PostgreSQL db
    :param schema: filename of .sql schema or schema string
    :returns: bool of whether table creation was sucesssful
    """
    sql_schema = schema
    if ('.sql' in schema):
        sql_schema = open(schema, "r").read()

    try:
        cur = conn.cursor()
        cur.execute(sql_schema)
        cur.close()
        conn.commit()
        return True
    except (Exception, DatabaseError) as error:
        print(error)
        return False

if __name__ == '__main__':
    conn = get_connection()
    create_tables(conn, "schema.sql")
    conn.close()
