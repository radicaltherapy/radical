# Import necessary libraries
import csv
import random
import requests
import tweepy
import schedule
import time
import json

# Set up Twitter API credentials
consumer_key = 'your_consumer_key'
consumer_secret = 'your_consumer_secret'
access_token = 'your_access_token'
access_token_secret = 'your_access_token_secret'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

# Define API endpoints
joke_api_url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw'
geek_jokes_api_url = 'https://geek-jokes.sameerkumar.website/api'
official_joke_api_url = 'https://official-joke-api.appspot.com/jokes/programming/random'

# Define CSV file name
csv_file = 'jokes.csv'

# Function to add jokes to CSV file
def add_jokes_to_csv(jokes):
    with open(csv_file, 'a', newline='') as f:
        writer = csv.writer(f)
        for joke in jokes:
            writer.writerow([joke])

# Function to get jokes from JokeAPI
def get_jokes_from_jokeapi():
    response = requests.get(joke_api_url)
    data = response.json()
    print(data)
    jokes = []
    if data['type'] == 'twopart':
        joke = data['setup'] + ' ' + data['delivery']
    else:
        joke = data['joke']
    if len(joke) <= 255:
        jokes.append(joke)
    add_jokes_to_csv(jokes)

# Function to get jokes from Geek Jokes API
def get_jokes_from_geek_jokes_api():
    response = requests.get(geek_jokes_api_url)
    joke = response.json()
    print(joke)
    if len(joke) <= 255:
        jokes = [joke]
        add_jokes_to_csv(jokes)

# Function to get jokes from Official Joke API
def get_jokes_from_official_joke_api():
    response = requests.get(official_joke_api_url)
    data = response.json()[0]
    joke = data['setup'] + ' ' + data['punchline']
    if len(joke) <= 255:
        jokes = [joke]
        add_jokes_to_csv(jokes)


"""
# Schedule a function to add new jokes to the CSV file every day at 12:00 PM
schedule.every().day.at("12:00").do(get_jokes_from_jokeapi)
schedule.every().day.at("12:00").do(get_jokes_from_geek_jokes_api)
schedule.every().day.at("12:00").do(get_jokes_from_official_joke_api)

# Function to tweet a random joke from the CSV file
def tweet_joke():
    jokes = []
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            jokes.append(row[0])
    joke = random.choice(jokes)
    if len(joke) <= 255:
        api.update_status(joke)
    else:
        tweet_joke()


# Schedule a tweet to be sent every day at 12:00 PM
schedule.every().day.at("12:00").do(tweet_joke)

# Run the scheduler continuously
while True:
    schedule.run_pending()
    time.sleep(1)
"""

def main():
    print("Jokes!")
    get_jokes_from_jokeapi()
    get_jokes_from_geek_jokes_api()
    get_jokes_from_official_joke_api()
    return print("Jokes!")

# Using the special variable 
# __name__
if __name__=="__main__":
    main()