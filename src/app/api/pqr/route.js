import Texts from "@/app/texts/texts.js";
const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const RESEND_API_KEY = "API KEY";

function calculateDate() {
    const date = new Date();
    const day = date.getDate();
    const month = monthNames[date.getMonth()]; // Convertir número de mes a nombre
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0'); // Formatear para asegurar dos dígitos
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return {day, month, year, hours, minutes};
}

export async function POST(request) {

    const body = await request.json();
    const {day, month, year, hours, minutes} = calculateDate(); // Formatear para asegurar dos dígitos


    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    .email-container {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .email-content {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header h2 {
      color: #333333;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
    }
    .info-table th, .info-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #dddddd;
      word-wrap: break-word;
    }
    .info-table th {
      background-color: #f2f2f2;
      color: #333333;
      width: 30%;
    }
    .info-table td {
      color: #555555;
      width: 70%;
    }
    .highlight {
      font-size: 1.1em;
      font-weight: bold;
      color: #333333;
      word-wrap: break-word;
    }
    @media screen and (max-width: 600px) {
      .info-table th, .info-table td {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
      }
      .info-table th {
        text-align: left;
        background-color: transparent;
        color: #333333;
        font-weight: bold;
      }
      .info-table td {
        text-align: left;
        border-bottom: 1px solid #dddddd;
        padding: 5px 0;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-content">
      <div class="header">
        <h2>Detalles de la Solicitud</h2>
      </div>
      <table class="info-table">
        <tr>
          <th>Nombre Apellido</th>
          <td>${body.nombre} ${body.apellido}</td>
        </tr>
        <tr>
          <th>Cédula</th>
          <td>${body.cedula}</td>
        </tr>
        <tr>
          <th>Teléfono</th>
          <td>${body.telefono}</td>
        </tr>
        <tr>
          <th>Correo Electrónico</th>
          <td>${body.correo}</td>
        </tr>
        <tr>
          <th>Fecha</th>
          <td>${day} de ${month} del ${year}</td>
        </tr>
        <tr>
          <th>Hora</th>
          <td>${hours}:${minutes}</td>
        </tr>
        <tr>
          <th>Tipo</th>
          <td>${body.tipo}</td>
        </tr>
        <tr>
          <th>Petición / Queja / Reclamo</th>
          <td class="highlight">${body.solicitud}</td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
`;

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: 'Prueba <prueba@example.com>',
            to: ['prueba@example.com'],
            subject: `Cotizacion: - ${body.nombre} ${body.apellido}` ,
            html: htmlContent,
        }),
    });

    if (res.ok) {
        const data = await res.json();
        return Response.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    }
}