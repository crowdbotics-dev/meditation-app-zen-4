from rest_framework import authentication
from analytics.models import UserActivity, UserActivity, UserActivity
from .serializers import (
    UserActivitySerializer,
    UserActivitySerializer,
    UserActivitySerializer,
)
from rest_framework import viewsets


class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserActivity.objects.all()
