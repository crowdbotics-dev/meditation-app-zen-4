from django.conf import settings
from django.db import models


class SleepContent(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    type = models.CharField(
        max_length=50,
    )
    audio_file = models.FileField(
        null=True,
        blank=True,
    )


# Create your models here.
