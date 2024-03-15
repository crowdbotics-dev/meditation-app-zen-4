from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    PlanViewSet,
    SessionViewSet,
    PlanViewSet,
    SessionViewSet,
    PlanViewSet,
    SessionViewSet,
    PlanViewSet,
    SessionViewSet,
)

router = DefaultRouter()
router.register("plan", PlanViewSet)
router.register("session", SessionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
