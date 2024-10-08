import { NextResponse } from 'next/server';
import { apiFetch } from '@/api/apiFetch';
import { Movie } from '@/types/Movie';
import { formatMovie } from '@/api/formatMovie';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  try {
    const data: Movie = await apiFetch(endpoint);
    const formattedData: Movie = formatMovie(data);
    return NextResponse.json(formattedData);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ 
        error: 'Failed to fetch movie details', 
        details: error.message 
      });
  } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ 
        error: 'Failed to fetch movie details', 
        details: 'An unexpected error occurred' 
      });
  }
  }
}
