import json
from django.shortcuts import render
from django.conf import settings

def landing(request):
    with open(settings.BASE_DIR / 'templates/static/content.json') as json_file:
        data = json.load(json_file)
    return render(request, 'landing.html', {'data': data})