export default function AboutSection() {
    return (
        <section className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-12">

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900">About STEM NEWS</h1>
                        <div className="w-20 h-1 bg-blue-600" />
                        <p className="text-gray-600 leading-relaxed">
                            STEM NEWS is your premier source for the latest developments in Science,
                            Technology, Engineering, and Mathematics. Founded in 2024, we&apos;ve dedicated
                            ourselves to making complex STEM topics accessible to everyone.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our team of expert journalists and researchers work tirelessly to bring
                            you accurate, engaging, and timely coverage of breakthrough discoveries,
                            technological innovations, and scientific advancements from around the globe.
                        </p>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">•</span>
                                    Accuracy in Reporting
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">•</span>
                                    Educational Excellence
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">•</span>
                                    Global Perspective
                                </li>
                            </ul>
                        </div>
                    </div>




                </div>
            </div>


        </section >
    );
}