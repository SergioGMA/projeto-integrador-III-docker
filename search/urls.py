from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


from rest_framework import routers
from people import views as peopleviewsets
route = routers.DefaultRouter()

route.register(r'people', peopleviewsets.PeopleViewSet, basename="People")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)