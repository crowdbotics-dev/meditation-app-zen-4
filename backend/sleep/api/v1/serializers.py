from rest_framework import serializers
from sleep.models import SleepContent, SleepContent


class SleepContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepContent
        fields = "__all__"
