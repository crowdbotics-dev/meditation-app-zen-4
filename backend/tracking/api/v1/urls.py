from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ProgressViewSet, ProgressViewSet, ProgressViewSet, ProgressViewSet

router = DefaultRouter()
router.register("progress", ProgressViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
