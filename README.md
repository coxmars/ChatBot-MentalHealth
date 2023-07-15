# ChatBot-MentalHealth

## Initial Setup:
This repository has the basic files.

Clone this repository and create a virtual environment with the next steps
```
git clone https://github.com/coxmars/ChatBot-MentalHealth.git
cd ChatBot-MentalHealth
python3 -m venv venv
For MAC OS is: . venv/bin/activate and for Windows is: venv\Scripts\activate
```
Install dependencies
```
In the virtual environment or (venv) -> pip install Flask torch torchvision nltk
```
Install nltk package
```
In the virtual environment or (venv) -> python
>>> import nltk
>>> nltk.download('punkt')
