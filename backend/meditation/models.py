from django.conf import settings
from django.db import models


class Plan(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    sessions = models.ManyToManyField(
        "meditation.Session",
        related_name="plans",
    )


class Session(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    audio_file = models.FileField(
        null=True,
        blank=True,
    )
    duration = models.IntegerField(
        null=True,
        blank=True,
    )


# Create your models here.
