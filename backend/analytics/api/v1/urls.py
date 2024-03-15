from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    UserActivityViewSet,
    UserActivityViewSet,
    UserActivityViewSet,
    UserActivityViewSet,
)

router = DefaultRouter()
router.register("useractivity", UserActivityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
