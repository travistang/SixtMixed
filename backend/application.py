from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/person/<idx>')
def send_person(idx):
    people = [person_1(), person_2(), person_3()]
    return jsonify(people[int(idx)])
    


def person_1():
    name = "Microsoft Developer"

    event0 = dict()
    event0['title'] = "Meet with Jack"
    event0['start'] = [2019, 11, 24, 10, 0]
    event0['end'] = [2019, 11, 24, 12, 0]
    event0['location'] = "Boltzmannstraße 3, 85748 Garching bei München"

    event1 = dict()
    event1['title'] = "Meetup with company board"
    event1['start'] = [2019, 11, 24, 14, 0]
    event1['end'] = [2019, 11, 24, 16, 0]
    event1['location'] = "Walter-Gropius-Straße 5, 80807 München"

    event2= dict()
    event2['title'] = "Dinner with Granny"
    event2['start'] = [2019, 11, 24, 18, 0]
    event2['end'] = [2019, 11, 24, 20, 0]
    event2['location'] = "Lützelsteiner Str. 18, 80939 München"
    
    calender = [event0, event1, event2]
    return name, calender

def person_2():
    name = "TUM Student"

    event0 = dict()
    event0['title'] = "DS lecture"
    event0['start'] = [2019, 11, 24, 9, 0]
    event0['end'] = [2019, 11, 24, 11, 30]
    event0['location'] = "Boltzmannstraße 3, 85748 Garching bei München"

    event1 = dict()
    event1['title'] = "Romantic lunch with Anna"
    event1['start'] = [2019, 11, 24, 13, 0]
    event1['end'] = [2019, 11, 24, 16, 0]
    event1['location'] = "Ungererstraße 216, 80805 München"

    event2= dict()
    event2['title'] = "Watch Turandot"
    event2['start'] = [2019, 11, 24, 18, 0]
    event2['end'] = [2019, 11, 24, 20, 0]
    event2['location'] = "Max-Joseph-Platz 2, 80539 München"
    
    calender = [event0, event1, event2]
    return name, calender
   
def person_3():
    name = "LMU Studentin"

    event0 = dict()
    event0['title'] = "Soziologie Studium"
    event0['start'] = [2019, 11, 24, 10, 0]
    event0['end'] = [2019, 11, 24, 11, 0]
    event0['location'] = "Geschwister-Scholl-Platz 1, 80539 München"

    event1 = dict()
    event1['title'] = "Romantic lunch with Tim"
    event1['start'] = [2019, 11, 24, 13, 0]
    event1['end'] = [2019, 11, 24, 16, 0]
    event1['location'] = "Ungererstraße 216, 80805 München"

    event2= dict()
    event2['title'] = "Netflix and Chill"
    event2['start'] = [2019, 11, 24, 18, 30]
    event2['end'] = [2019, 11, 24, 20, 0]
    event2['location'] = "Berzeliusstraße 3, 80939 München"
    
    calender = [event0, event1, event2]
    return name, calender



