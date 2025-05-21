<!-- resources/views/emails/contact-form.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(to right, #60a5fa, #2563eb);
            color: #fff;
            padding: 20px;
            border-radius: 5px 5px 0 0;
            text-align: center;
        }
        .content {
            background-color: #f9fafb;
            padding: 20px;
            border: 1px solid #e5e7eb;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #4b5563;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #6b7280;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
        <p>A new inquiry has been submitted through the contact form:</p>

        <div class="field">
            <p class="label">Name:</p>
            <p>{{ $data['name'] }}</p>
        </div>

        <div class="field">
            <p class="label">Email:</p>
            <p>{{ $data['email'] }}</p>
        </div>

        <div class="field">
            <p class="label">Phone:</p>
            <p>{{ $data['phone'] }}</p>
        </div>

        <div class="field">
            <p class="label">Interested In:</p>
            <p>{{ ucfirst($data['service']) }}</p>
        </div>

        <div class="field">
            <p class="label">Message:</p>
            <p>{{ $data['message'] }}</p>
        </div>

        <div class="field">
            <p>Customer has {{ $data['consent'] ? 'agreed' : 'not agreed' }} to be contacted.</p>
        </div>
    </div>

    <div class="footer">
        <p>This is an automated email from the Internet & Cable Deals website.</p>
    </div>
</body>
</html>