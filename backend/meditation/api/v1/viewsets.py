from rest_framework import authentication
from meditation.models import Plan, Session, Plan, Session, Plan, Session
from .serializers import (
    PlanSerializer,
    SessionSerializer,
    PlanSerializer,
    SessionSerializer,
    PlanSerializer,
    SessionSerializer,
)
from rest_framework import viewsets


class PlanViewSet(viewsets.ModelViewSet):
    serializer_class = PlanSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Plan.objects.all()


class SessionViewSet(viewsets.ModelViewSet):
    serializer_class = SessionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Session.objects.all()
