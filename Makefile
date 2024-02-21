PROJECT_ID=$(shell gcloud config get-value core/project)
APP=sedes


build:
	gcloud builds submit --tag gcr.io/$(PROJECT_ID)/$(APP)

