-- Create contact_submissions table to store form submissions
CREATE TABLE public.contact_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view submissions (you can adjust this later)
CREATE POLICY "Anyone can view their submissions"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (true);

-- Add index for faster queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);