from flask import Flask, render_template, request, jsonify

#from chat import get_response

# Here we create a Flask application object and pass __name__ to it.
app = Flask(__name__, template_folder='../view', static_folder='../static')

# Here we define the route and the function that is called when it
@app.get("/")
def index_get():
    return render_template('index.html')

"""
@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: Check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)
"""

if __name__ == "__main__":
    app.run(debug=True)