from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SleepContentViewSet,
    SleepContentViewSet,
    SleepContentViewSet,
    SleepContentViewSet,
)

router = DefaultRouter()
router.register("sleepcontent", SleepContentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
