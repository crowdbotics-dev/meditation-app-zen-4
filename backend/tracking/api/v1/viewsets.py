from rest_framework import authentication
from tracking.models import Progress, Progress, Progress
from .serializers import ProgressSerializer, ProgressSerializer, ProgressSerializer
from rest_framework import viewsets


class ProgressViewSet(viewsets.ModelViewSet):
    serializer_class = ProgressSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Progress.objects.all()
