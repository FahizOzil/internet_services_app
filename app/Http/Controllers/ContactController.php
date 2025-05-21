<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use App\Models\ContactInquiry;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function submit(Request $request)
    {
        // Validate form data
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'phone' => 'required|string|max:20',
            'service' => 'required|string|in:internet,tv,bundle,support,other',
            'message' => 'required|string|max:1000',
            'consent' => 'required|boolean'
        ]);

        try {
            // Store contact inquiry in database (optional but recommended)
            $inquiry = ContactInquiry::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'phone' => $validatedData['phone'],
                'service' => $validatedData['service'],
                'message' => $validatedData['message'],
                'consent' => $validatedData['consent'],
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent()
            ]);

            // Send email notification
            Mail::to(config('mail.contact_email', 'admin@internetandcabledeals.com'))
                ->send(new ContactFormMail($validatedData));

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We will get back to you shortly.'
            ]);
        } catch (\Exception $e) {
            // Log the error
            \Log::error('Contact form submission error: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was a problem sending your message. Please try again later.'
            ], 500);
        }
    }
}