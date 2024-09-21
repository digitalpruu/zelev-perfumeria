
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


    const htmlContent =`<!DOCTYPE html>
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
    .message {
      margin-bottom: 20px;
      color: #555555;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #777777;
      font-size: 0.9em;
    }
    .highlight {
      font-weight: bold;
      color: #333333;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-content">
      <div class="header">
        <h2>Confirmación de Recepción de PQR</h2>
      </div>
      <div class="message">
        <p>Estimado(a) <span class="highlight">${body.nombre} ${body.apellido}</span>,</p>
        <p>
          Hemos recibido su <span class="highlight">${body.tipo}</span> con respecto a 
          su solicitud presentada. Agradecemos que se haya tomado el tiempo de comunicarse con nosotros. 
        </p>
        <p>
          Nuestro equipo está revisando su caso y le responderemos lo más pronto posible. Puede estar seguro de que estamos comprometidos a resolver su solicitud de la mejor manera.
        </p>
        <p>
          Su <span class="highlight">${body.tipo}</span> fue recibido el <span class="highlight">${day} de ${month} del ${year} a las ${hours}:${minutes}</span>.
        </p>
        <p>Gracias por su paciencia y comprensión.</p>
        <p>Atentamente,</p>
        <p><strong>El Equipo de Soporte</strong></p>
      </div>
      <div class="footer">
        <p>Este es un correo automático, por favor no responder a este mensaje.</p>
      </div>
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
            to: [`${body.correo}`],
            subject: `Gracias por contactarnos: Su solicitud ha sido recibida` ,
            html: htmlContent,
        }),
    });

    if (res.ok) {
        const data = await res.json();
        return Response.json(data);
    }
}