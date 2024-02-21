/*
const express = require('express');
//const redis = require('redis');
const app = express();
const port = process.env.PORT || 8080; // Establece un puerto por defecto si PORT no está definido

//const redisHost = "172.17.55.3"; // Reemplazar con el host de Memorystore
//const redisPort = 6379; // Reemplazar con el puerto de Memorystore

//const client = redis.createClient(redisPort, redisHost);

// Ruta para manejar la solicitud GET a /sedes
app.get('/sedes', (req, res) => {
  // Datos de las sedes
  const sedes = 
  [
    {
      "resourceType": "Location",
      "id": "LocationExample1",
      "meta": {
        "profile": [
          "https://fhir.onehealth.com.pe/StructureDefinition-LocationOH",
          "StructureDefinition/LocationOH"
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"LocationExample1\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"LocationExample1\" </p><p style=\"margin-bottom: 0px\">Profiles: <a href=\"StructureDefinition-LocationOH.html\">OneHealth Location</a>, <code>StructureDefinition/LocationOH</code></p></div><p><b>identifier</b>: id:\u00a0L2222\u00a0(use:\u00a0OFFICIAL)</p><p><b>status</b>: active</p><p><b>name</b>: Sede San Isidro</p><p><b>description</b>: Sede de la Clínica Internacional ubicada en la ciudad de San Isidro</p><p><b>physicalType</b>: Building <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#bu)</span></p><p><b>managingOrganization</b>: <a href=\"Organization/123456\">Organization/123456</a></p></div>"
      },
      "identifier": [
        {
          "use": "official",
          "value": "1003",
          "assigner": {
            "reference": "Organization/123456"
          }
        }
      ],
      "status": "active",
      "name": "Sede San Isidro",
      "description": "Sede de la Clínica Internacional ubicada en la ciudad de San Isidro",
      "physicalType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "bu",
            "display": "Building"
          }
        ]
      },
      "managingOrganization": {
        "reference": "Organization/1003"
      }
    },
    {
      "resourceType": "Location",
      "id": "LocationExample2",
      "meta": {
        "profile": [
          "https://fhir.onehealth.com.pe/StructureDefinition-LocationOH",
          "StructureDefinition/LocationOH"
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"LocationExample2\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"LocationExample2\" </p><p style=\"margin-bottom: 0px\">Profiles: <a href=\"StructureDefinition-LocationOH.html\">OneHealth Location</a>, <code>StructureDefinition/LocationOH</code></p></div><p><b>identifier</b>: id:\u00a0L2222\u00a0(use:\u00a0OFFICIAL)</p><p><b>status</b>: active</p><p><b>name</b>: Sede Lima</p><p><b>description</b>: Sede de la Clínica Internacional ubicada en la ciudad de Lima</p><p><b>physicalType</b>: Building <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#bu)</span></p><p><b>managingOrganization</b>: <a href=\"Organization/123456\">Organization/123456</a></p></div>"
      },
      "identifier": [
        {
          "use": "official",
          "value": "1001",
          "assigner": {
            "reference": "Organization/123456"
          }
        }
      ],
      "status": "active",
      "name": "Sede Lima",
      "description": "Sede de la Clínica Internacional ubicada en la ciudad de Lima",
      "physicalType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "bu",
            "display": "Building"
          }
        ]
      },
      "managingOrganization": {
        "reference": "Organization/123456"
      }
    },
    {
      "resourceType": "Location",
      "id": "LocationExample3",
      "meta": {
        "profile": [
          "https://fhir.onehealth.com.pe/StructureDefinition-LocationOH",
          "StructureDefinition/LocationOH"
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"LocationExample3\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"LocationExample3\" </p><p style=\"margin-bottom: 0px\">Profiles: <a href=\"StructureDefinition-LocationOH.html\">OneHealth Location</a>, <code>StructureDefinition/LocationOH</code></p></div><p><b>identifier</b>: id:\u00a0L2222\u00a0(use:\u00a0OFFICIAL)</p><p><b>status</b>: active</p><p><b>name</b>: Sede San Borja</p><p><b>description</b>: Sede de la Clínica Internacional ubicada en la ciudad de San Borja</p><p><b>physicalType</b>: Building <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#bu)</span></p><p><b>managingOrganization</b>: <a href=\"Organization/123456\">Organization/123456</a></p></div>"
      },
      "identifier": [
        {
          "use": "official",
          "value": "1002",
          "assigner": {
            "reference": "Organization/123456"
          }
        }
      ],
      "status": "active",
      "name": "Sede San Borja",
      "description": "Sede de la Clínica Internacional ubicada en la ciudad de San Borja",
      "physicalType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "bu",
            "display": "Building"
          }
        ]
      },
      "managingOrganization": {
        "reference": "Organization/123456"
      }
    },
    {
      "resourceType": "Location",
      "id": "LocationExample4",
      "meta": {
        "profile": [
          "https://fhir.onehealth.com.pe/StructureDefinition-LocationOH",
          "StructureDefinition/LocationOH"
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"LocationExample4\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"LocationExample4\" </p><p style=\"margin-bottom: 0px\">Profiles: <a href=\"StructureDefinition-LocationOH.html\">OneHealth Location</a>, <code>StructureDefinition/LocationOH</code></p></div><p><b>identifier</b>: id:\u00a0L2222\u00a0(use:\u00a0OFFICIAL)</p><p><b>status</b>: active</p><p><b>name</b>: Sede Surco</p><p><b>description</b>: Sede de la Clínica Internacional ubicada en la ciudad de Surco</p><p><b>physicalType</b>: Building <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#bu)</span></p><p><b>managingOrganization</b>: <a href=\"Organization/123456\">Organization/123456</a></p></div>"
      },
      "identifier": [
        {
          "use": "official",
          "value": "1004",
          "assigner": {
            "reference": "Organization/123456"
          }
        }
      ],
      "status": "active",
      "name": "Sede Surco",
      "description": "Sede de la Clínica Internacional ubicada en la ciudad de Surco",
      "physicalType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "bu",
            "display": "Building"
          }
        ]
      },
      "managingOrganization": {
        "reference": "Organization/123456"
      }
    },
    {
      "resourceType": "Location",
      "id": "LocationExample5",
      "meta": {
        "profile": [
          "https://fhir.onehealth.com.pe/StructureDefinition-LocationOH",
          "StructureDefinition/LocationOH"
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"LocationExample5\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"LocationExample5\" </p><p style=\"margin-bottom: 0px\">Profiles: <a href=\"StructureDefinition-LocationOH.html\">OneHealth Location</a>, <code>StructureDefinition/LocationOH</code></p></div><p><b>identifier</b>: id:\u00a0L2222\u00a0(use:\u00a0OFFICIAL)</p><p><b>status</b>: active</p><p><b>name</b>: Sede Molina</p><p><b>description</b>: Sede de la Clínica Internacional ubicada en la ciudad de Molina</p><p><b>physicalType</b>: Building <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-location-physical-type.html\">Location type</a>#bu)</span></p><p><b>managingOrganization</b>: <a href=\"Organization/123456\">Organization/123456</a></p></div>"
      },
      "identifier": [
        {
          "use": "official",
          "value": "1011",
          "assigner": {
            "reference": "Organization/123456"
          }
        }
      ],
      "status": "active",
      "name": "Sede Molina",
      "description": "Sede de la Clínica Internacional ubicada en la ciudad de Molina",
      "physicalType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "bu",
            "display": "Building"
          }
        ]
      },
      "managingOrganization": {
        "reference": "Organization/123456"
      }
    }
  ];
  


  res.json(sedes);

  
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

*/


/**
 * Cloud Run application that generates and delivers dynamiocally generated content.
 */

const express = require('express');
const cors = require('cors')
const redis = require("redis");

const app = express();

const client = redis.createClient({
  "host": "172.17.55.3"
});
client.on("error", function(error) {
  console.error(error);
});

app.use(cors());

app.get('/', (req, res) => {
  res.set('Cache-Control', 'no-store');
  client.set("key", "value!", redis.print);
  client.get("key", (err, reply) => {
    res.send(`
    <html>
      <head>
      </head>
      <body>
        <p>Connecting to Redis at: ${process.env.REDIS_IP}</p>
        <p>Value of key just read: ${reply}</p>
      </body>
    </html>
    `);
    });
  });


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});