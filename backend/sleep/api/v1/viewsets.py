from rest_framework import authentication
from sleep.models import SleepContent, SleepContent, SleepContent
from .serializers import (
    SleepContentSerializer,
    SleepContentSerializer,
    SleepContentSerializer,
)
from rest_framework import viewsets


class SleepContentViewSet(viewsets.ModelViewSet):
    serializer_class = SleepContentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = SleepContent.objects.all()
