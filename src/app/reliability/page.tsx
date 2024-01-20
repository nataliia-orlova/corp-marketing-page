import Link from 'next/link';
import Hero from '@/components/Hero';
import reliabilityImg from '../../../public/reliability.jpg';

export default function reliabilityPage() {
    return (
        <Hero
            imgData={reliabilityImg}
            imgAlt='welding'
            title='Super high reliable hosting'
        />
    );
}
