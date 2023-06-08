# Debug assignment 1 - instructions

In this assignment, you'll be editing an existing software project. There are several problems in the code, and it's your job to find and fix them all.

## Rules

- Do not ask your classmates (verbally or through any other communication method) for help
- Do not copy/paste any code from someone else or from any online resource
- Do not edit any files in the `instructions` folder

## Process

- This repository has been automatically created for you
- **Clone** it onto your machine (**do not** fork it)
- Work on the `main` branch, and make all your commits there
- Run `git push` to sync your local changes with the remote repository
- A pull request (PR) has been automatically created on the remote repository for you (**do not** delete this)
- When you have made your final commits (and pushed), request a review on the PR from your assigned reviewer

## Project context

The software project you're working with has two parts:

1. A back-end server which provides quotes on request and creates new quotes
2. A simple front-end webpage which displays random quotes from the API when a button is clicked and allows users to create additional quotes via a form

## Instructions

Get the project working without any error messages and with full functionality as described below.

### Server

The server should be runnable with a single command. When the server is running, it should listen for requests on port 3000.

The server should have the following routes and functionalities:

| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a string stating the number of quotes available. |
| `/quotes` | `GET` | Returns a JSON object containing all the quotes. |
| `/quotes` | `POST` | Accepts a JSON object and uses it to create and store a new quote. |
| `/quotes/random` | `GET` | Returns a random quote from the collection as a JSON object. |
| `/quotes/:id` | `GET` | Returns a JSON object representing a single quote from the collection, selected by `:id`. If the id is invalid (non-numeric or out-of-bounds), returns a JSON object explaining the problem, with `404` as the status code. |

### Client

The client consists of a single webpage.

When the page is opened, it should look like this:

![Example front-end webpage](./client-example.png)

- When the "Be Inspired" button is clicked, the page should display a random quote.

- No quote should be visible until the button is clicked.

- When a user submits a new quote via the form, a new quote should be created and stored in the data. 

- If the submission is successful, the input should clear up and an alert should appear stating "Quote added.". 

- When clicking on the "Be Inspired" button, the newly created quote should be displayed at some point.

Watch this [**video recording**](https://www.loom.com/share/b292735f96534977af85b3d6a1adeae3) to see the expected functionality.

### README

The project README should contain clear information on the following:

1. How to install the required libraries
2. How to run the server
3. Any remaining bugs in the project

---

[Back](../README.md)

---
