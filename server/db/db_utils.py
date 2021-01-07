""" Utilities file to interact with postgres db. """

from psycopg2 import connect, DatabaseError
from configparser import ConfigParser

DB_CONFIG_FILE = 'database.ini'
DB_CONFIG_SECTION = 'postgresql'

def config(filename: str = DB_CONFIG_FILE, section: str = DB_CONFIG_SECTION) -> dict:
    """
    Retrieves config information from specified .ini file.

    :param filename: filename containing config
    :param section: section of file for config
    :returns: dict of config info for db connection
    """
    parser = ConfigParser()
    parser.read(filename)

    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    return db

def get_connection(filename: str = DB_CONFIG_FILE, section: str = DB_CONFIG_SECTION):
    """
    Retrieves a connection to a PostgreSQL server.

    Note that all connection information should be stored in an .ini and
    the .ini should be in the .gitignore. Connecting via arguments will not be
    supported.

    :param filename: filename containing config
    :param section: section of file for config
    :returns: connection to PostgreSQL server
    """
    conn = None
    try:
        params = config(filename, section)
        print('Connecting to the PostgreSQL database...')
        conn = connect(**params)
    except (Exception, DatabaseError) as error:
        print(error)
    return conn

class PostgresEngine:
    """
    Class to handle all interaction with database.

    :attr conn: connection to postgresql db
    """

    def __init__(self, filename: str, section: str):
        """
        :param filename: file containing db config info
        :param section: section of file containing db config
        """
        self.conn = get_connection(filename, section)

    def __del__(self):
        """
        Destructor. Closes connection, then deletes members.
        """
        self.conn.close()
        del self.conn

    def insert_db(self, query: str, values: tuple) -> bool:
        """
        Insert values into a database with a SQL query.

        :param query: query used to insert into db
        :param values: values to insert with the query
        :returns: bool of whether insert was sucesssful
        """
        try:
            cur = self.conn.cursor()
            cur.execute(query, values)
            self.conn.commit()
            cur.close()
            return True
        except (Exception, DatabaseError) as error:
            print(error)
            return False

    def query_db(self, query: str, data: tuple = None, fetchtype: str = "one") -> tuple:
        """
        Query postgres db with arguments.
        fetchtype can be "one" | "all" | "many:size"

        :param query: query used to insert into db
        :param data: tuple of data to replace within the query
        :param fetchtype: type of fetch for query
        :returns: a tuple representing a row of data
        """

        try:
            cur = self.conn.cursor()

            if not data:
                cur.execute(query)
            else:
                cur.execute(query, data)

            if fetchtype == "one":
                res = cur.fetchone()
            elif "many" in fetchtype:
                res = cur.fetchmany(fetchtype.split(':')[1])
            else:
                res = cur.fetchall()

            cur.close()
            return res
        except (Exception, DatabaseError) as error:
            print(error)
            return None

    def update_db(self, query: str, data: tuple) -> bool:
        """
        Update entry from database with query/data.

        :param query: query used to insert into db
        :param data: tuple of data to replace within the query
        :returns: bool representing whether update was successful
        """

        try:
            cur = self.conn.cursor()
            cur.execute(query, data)
            cur.close()
            return True
        except (Exception, DatabaseError) as error:
            print(error)
            return False

    def delete_db(self, query: str, data: tuple) -> bool:
        """
        Delete from database with query/data.

        :param query: query used to insert into db
        :param data: tuple of data to replace within the query
        :returns: bool representing whether delete was successful
        """

        try:
            cur = self.conn.cursor()
            cur.execute(query, data)
            cur.close()
            return True
        except (Exception, DatabaseError) as error:
            print(error)
            return False

if __name__ == '__main__':
    engine = PostgresEngine(DB_CONFIG_FILE, DB_CONFIG_SECTION)
    cur = engine.conn.cursor()
    
    # Test connection
    print('PostgreSQL database version:')
    cur.execute('SELECT version()')
    db_version = cur.fetchone()
    print(db_version)

    del engine
