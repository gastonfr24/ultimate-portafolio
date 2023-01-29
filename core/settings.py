from pathlib import Path
import os
import environ

# Environ Settings
env = environ.Env()
environ.Env.read_env()

# Build paths
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = False

ALLOWED_HOSTS = [
        '*'
    ]

if not DEBUG:
    ALLOWED_HOSTS = [
        'gastonfr.com',
        '.gastonfr.com',
        "https://gastonfr.com",
        'https://www.gastonfr.com'
        'www.gastonfr.com'
    ]

# Deploy Settings
RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# Application

DJANGO_APPS  = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'corsheaders',
    'rest_framework',
    'froala_editor'
]

PROJECT_APPS = [
'apps.contacts',
'apps.portfolio',
'apps.category',
]

INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRD_PARTY_APPS

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'


CORS_ORIGIN_WHITELIST = [
        "http://127.0.0.1:8000",
        "http://localhost:3000",
        "http://localhost:8000"
    ]
CSRF_TRUSTED_ORIGINS = [
        "http://127.0.0.1:8000",
        "http://localhost:3000",
        "http://localhost:8000"
    ]

if not DEBUG:
    CORS_ORIGIN_WHITELIST = [
        "https://gastonfr.com",
        'https://www.gastonfr.com',

        'https://gastonfr.s3.amazonaws.com',
        'https://gastonfr.s3.sa-east-1.amazonaws.com',
    ]
    CSRF_TRUSTED_ORIGINS = [
        "https://gastonfr.com",
        "https://www.gastonfr.com",
        'https://gastonfr.s3.amazonaws.com',
        'https://gastonfr.s3.sa-east-1.amazonaws.com',
    ]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

# Database Postgresql
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Password validation

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Buenos_Aires'

USE_I18N = True
USE_L10N = True
USE_TZ = True



# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

# Media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]

# Froala media files
FROALA_UPLOAD_PATH = '/media/'


# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



# Django Rest Framenwork
REST_FRAMEWORK = {
    # Permisos (cualquier tipo de POST y request)
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    # Paginación
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 16,
}

# Autenticación del Rest Framework
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

FILE_UPLOAD_PERMISSIONS = 0o640

EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'



if not DEBUG:
    # Email settings
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_PORT = 587
    EMAIL_HOST_USER = env('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
    EMAIL_USE_TLS = True
    EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'

    # STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

    # Database Postgresql
    DATABASES = {
        "default": env.db("DATABASE_URL"),
    }
    DATABASES["default"]["ATOMIC_REQUESTS"] = True


    AWS_QUERYSTRING_AUTH = False

    # aws settings
    AWS_ACCESS_KEY_ID = env('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = env('AWS_SECRET_ACCESS_KEY')
    AWS_STORAGE_BUCKET_NAME = env('AWS_STORAGE_BUCKET_NAME')

    # s3 domail settings

    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
    AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
    AWS_DEFAULT_ACL = 'public-read'

    # s3 static settings

    STATIC_LOCATION = 'static'
    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATIC_LOCATION}/'
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

    # s3 public media settings

    PUBLIC_MEDIA_LOCATION = 'media'
    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
    DEFAULT_FILE_STORAGE = 'core.storage_backends.MediaStore'

    STATICFILES_DIRS = (os.path.join(BASE_DIR, 'build/static'),)
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

    # Froala settings
    FROALA_UPLOAD_PATH = f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
    FROALA_STORAGE_BACKEND = 'django.core.files.storage.FileSystemStorage'