from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('ddv_example.urls')),
    url(r'^', include('crud_ajax_modal.urls')),
    
]
