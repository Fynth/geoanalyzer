from django.contrib.gis.db import models


class Place(models.Model):
    name = models.CharField(max_length=100)
    location = models.PointField(srid=4326)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Places"


class Recommendation(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Recommendations"


class GisRecommendation(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "GisRecommendations"

