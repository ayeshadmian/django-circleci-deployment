"""
WSGI config for cms_aa project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/dev/howto/deployment/wsgi/
"""

import os
#import sys
#DJANGO_PATH =  os.path.join(os.path.abspath(os.path.dirname(__file__)), '..')
#sys.path.append(DJANGO_PATH)

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cms_aa.settings')

application = get_wsgi_application()

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
