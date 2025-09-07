import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allCourses, englishCourses, engineeringCourses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          All Courses
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive online courses designed to help you master English language skills and professional engineering drawing techniques. 
          Learn from industry experts with hands-on projects and real-world applications.
        </p>
      </div>

      {/* Course Categories Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="english">English</TabsTrigger>
          <TabsTrigger value="engineering">Engineering</TabsTrigger>
        </TabsList>

        {/* All Courses Tab */}
        <TabsContent value="all">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All Available Courses ({allCourses.length})</h2>
            <p className="text-gray-600">
              Browse all our courses across English language learning and Engineering Drawing disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        {/* English Courses Tab */}
        <TabsContent value="english">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">English Language Courses ({englishCourses.length})</h2>
            <p className="text-gray-600">
              Master English communication skills with our comprehensive language courses covering grammar, vocabulary, conversation, and more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englishCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        {/* Engineering Drawing Courses Tab */}
        <TabsContent value="engineering">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Drawing Courses ({engineeringCourses.length})</h2>
            <p className="text-gray-600">
              Learn professional technical drawing skills, CAD software, and industry-standard engineering documentation practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="text-center mt-20 p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          We're constantly adding new courses and updating our curriculum. 
          Contact us with your learning needs and we'll help you find the perfect course.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <Link href="/blog">Browse Learning Tips</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Course Card Component
interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    category: 'english' | 'engineering';
    subcategory: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    lessonCount: number;
    price: number;
    thumbnail: string;
    instructor: string;
    rating: number;
    studentsEnrolled: number;
    isFree: boolean;
    freeLessonsCount: number;
  };
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4">
            <Badge className={course.category === 'english' ? 'bg-green-500' : 'bg-orange-500'}>
              {course.category === 'english' ? 'English' : 'Engineering'}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-900">
              {course.difficulty}
            </Badge>
          </div>
          {!course.isFree && course.freeLessonsCount > 0 && (
            <div className="absolute bottom-4 left-4">
              <Badge variant="outline" className="bg-white/90 text-green-600 border-green-600">
                {course.freeLessonsCount} Free Lessons
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="mb-3">
          <Badge variant="outline" className="text-xs mb-2">
            {course.subcategory}
          </Badge>
        </div>
        <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </CardTitle>
        <CardDescription className="text-gray-600 mb-4 line-clamp-3">
          {course.description}
        </CardDescription>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Instructor:</span>
            <span className="font-medium">{course.instructor}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Duration:</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Lessons:</span>
            <span>{course.lessonCount} lessons</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-medium">{course.rating}</span>
              <span className="text-sm text-gray-500">({course.studentsEnrolled})</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${course.price}</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="w-full space-y-2">
          <Button className="w-full" asChild>
            <Link href={`/courses/${course.category}/${course.id}`}>
              View Course Details
            </Link>
          </Button>
          {course.freeLessonsCount > 0 && (
            <Button variant="outline" className="w-full text-sm" asChild>
              <Link href={`/courses/${course.category}/${course.id}?preview=true`}>
                Try Free Lessons
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}