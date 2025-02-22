from flask import Flask, request, jsonify
from flask_cors import CORS  # For handling Cross-Origin Resource Sharing (CORS)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (or configure more specifically if needed)

# Sample data (replace with your actual data or database interaction)
wildlife_data = {
    "species": ["Deer", "Coyote", "Wolf"],
    "locations": ["Area A", "Area B", "Area C"],
    "sightings": [120, 35, 5]
}

@app.route('/api/hello')
def hello():
    return jsonify({'message': 'Hello from the Wildlife Conservation Platform backend!'})

@app.route('/api/data')  # Example endpoint to return some data
def get_data():
    return jsonify(wildlife_data)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()  # Get data sent from the frontend (as JSON)
    message = data.get('message')  # Extract the 'message' from the JSON

    if message:
        # Process the message (e.g., store it in a database, log it, etc.)
        print(f"Received message: {message}")  # Print to the console for now

        return jsonify({'message': f'Message "{message}" received successfully!'}), 200  # 200 OK

    else:
        return jsonify({'message': 'No message received'}), 400  # 400 Bad Request

# Example of a more complex data interaction (replace with your actual database queries)
@app.route('/api/species/<species_name>')  # Dynamic route
def get_species_data(species_name):
  # In a real application, you would query a database here.
  # For this example, we'll just search our sample data:
  if species_name in wildlife_data["species"]:
    index = wildlife_data["species"].index(species_name)
    species_info = {
        "name": wildlife_data["species"][index],
        "sightings": wildlife_data["sightings"][index]
    }
    return jsonify(species_info), 200
  else:
    return jsonify({"message": "Species not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)  # Set debug=False in production!