import { Manrope, Limelight } from 'next/font/google';
import { Pacifico } from 'next/font/google';

export const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const limelight = Limelight({
    weight: '400',
    subsets: ['latin'],
});

export const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400', // Specify the weight you need
});