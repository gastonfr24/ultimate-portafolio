from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    path('froala_editor/', include('froala_editor.urls')),
    path('admin/', admin.site.urls),
    path('api/contacts/', include('apps.contacts.urls')),
    path('api/portfolio/', include('apps.portfolio.urls')),
    path('api/prices/',include('apps.ia.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Media URL
# urlpatterns += + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += [
#     re_path(r'^media/(?P<path>.*)$', serve, {
#         'document_root': settings.MEDIA_ROOT,
#     }),
# ]

# Front
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
                        