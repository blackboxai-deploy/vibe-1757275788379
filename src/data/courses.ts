export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'english' | 'engineering';
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonCount: number;
  price: number;
  currency: string;
  thumbnail: string;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  isFree: boolean;
  freeLessonsCount: number;
  youtubePlaylistId?: string;
  curriculum: Lesson[];
  features: string[];
  requirements: string[];
  learningOutcomes: string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  isFree: boolean;
  videoUrl?: string;
  youtubeVideoId?: string;
  materials?: LessonMaterial[];
  quiz?: Quiz;
}

export interface LessonMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'document' | 'exercise' | 'template';
  downloadUrl: string;
  size: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

// English Courses Data
export const englishCourses: Course[] = [
  {
    id: 'english-grammar-fundamentals',
    title: 'English Grammar Fundamentals',
    description: 'Master the essential rules of English grammar with practical exercises and real-world examples. Perfect for beginners and intermediate learners.',
    category: 'english',
    subcategory: 'Grammar',
    difficulty: 'Beginner',
    duration: '8 weeks',
    lessonCount: 24,
    price: 49.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f213d9bf-4e89-4e57-84a0-f3d51626c470.png',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    studentsEnrolled: 1250,
    isFree: false,
    freeLessonsCount: 3,
    youtubePlaylistId: 'PLExample1',
    curriculum: [
      {
        id: 'grammar-01',
        title: 'Introduction to English Grammar',
        description: 'Understanding the basics of English grammar structure',
        duration: '15 min',
        isFree: true,
        youtubeVideoId: 'dQw4w9WgXcQ'
      },
      {
        id: 'grammar-02', 
        title: 'Parts of Speech Overview',
        description: 'Nouns, verbs, adjectives, and more',
        duration: '20 min',
        isFree: true,
        youtubeVideoId: 'dQw4w9WgXcQ'
      },
      {
        id: 'grammar-03',
        title: 'Sentence Structure Basics',
        description: 'Building proper sentences in English',
        duration: '18 min',
        isFree: true,
        youtubeVideoId: 'dQw4w9WgXcQ'
      }
    ],
    features: ['24 comprehensive lessons', 'Interactive exercises', 'Grammar worksheets', 'Progress tracking'],
    requirements: ['Basic English reading ability', 'Commitment to practice'],
    learningOutcomes: ['Understand fundamental grammar rules', 'Build correct sentences', 'Improve writing skills']
  },
  {
    id: 'vocabulary-building-mastery',
    title: 'Vocabulary Building Mastery',
    description: 'Expand your English vocabulary with proven techniques, memory strategies, and practical usage in context.',
    category: 'english',
    subcategory: 'Vocabulary',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessonCount: 18,
    price: 39.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39af7eda-5a3b-406f-a020-cb2dd4724e92.png',
    instructor: 'Michael Chen',
    rating: 4.7,
    studentsEnrolled: 890,
    isFree: false,
    freeLessonsCount: 2,
    curriculum: [],
    features: ['Word association techniques', '1000+ new vocabulary words', 'Memory strategies', 'Usage in context'],
    requirements: ['Intermediate English level', 'Dedication to daily practice'],
    learningOutcomes: ['Learn 1000+ new words', 'Master memory techniques', 'Use vocabulary naturally']
  },
  {
    id: 'conversation-skills-bootcamp',
    title: 'English Conversation Skills Bootcamp',
    description: 'Build confidence in speaking English through practical conversation practice, pronunciation tips, and real-world scenarios.',
    category: 'english',
    subcategory: 'Conversation',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    lessonCount: 30,
    price: 69.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b87c5e5-a9cd-4c4c-a87f-30e481b5c10c.png',
    instructor: 'Emma Williams',
    rating: 4.9,
    studentsEnrolled: 1560,
    isFree: false,
    freeLessonsCount: 3,
    curriculum: [],
    features: ['Live conversation practice', 'Pronunciation training', 'Confidence building', 'Real-world scenarios'],
    requirements: ['Basic to intermediate English', 'Willingness to practice speaking'],
    learningOutcomes: ['Speak with confidence', 'Improve pronunciation', 'Handle real conversations']
  },
  {
    id: 'beginner-english-complete',
    title: 'Complete Beginner English Course',
    description: 'Start your English learning journey from zero. Learn basic vocabulary, simple grammar, and essential phrases for everyday communication.',
    category: 'english',
    subcategory: 'Beginner English',
    difficulty: 'Beginner',
    duration: '12 weeks',
    lessonCount: 36,
    price: 59.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4adf4956-9380-4779-8062-c65716f13970.png',
    instructor: 'David Rodriguez',
    rating: 4.6,
    studentsEnrolled: 2100,
    isFree: false,
    freeLessonsCount: 4,
    curriculum: [],
    features: ['Start from absolute zero', 'Basic vocabulary building', 'Simple grammar rules', 'Pronunciation guide'],
    requirements: ['No prior English knowledge needed', 'Commitment to daily study'],
    learningOutcomes: ['Basic English communication', 'Essential vocabulary', 'Simple sentence construction']
  }
];

// Engineering Drawing Courses Data
export const engineeringCourses: Course[] = [
  {
    id: 'technical-drawing-basics',
    title: 'Technical Drawing Fundamentals',
    description: 'Learn the essential tools, techniques, and principles of technical drawing. Perfect foundation for engineering and design careers.',
    category: 'engineering',
    subcategory: 'Basic Tools',
    difficulty: 'Beginner',
    duration: '6 weeks',
    lessonCount: 18,
    price: 54.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97252677-d6bd-4840-89da-66e86071cd5c.png',
    instructor: 'Dr. Robert Taylor',
    rating: 4.7,
    studentsEnrolled: 850,
    isFree: false,
    freeLessonsCount: 3,
    curriculum: [],
    features: ['Drawing tools mastery', 'Line types and weights', 'Geometric constructions', 'Dimensioning basics'],
    requirements: ['Basic math skills', 'Drawing instruments or software access'],
    learningOutcomes: ['Master drawing tools', 'Create accurate technical drawings', 'Understand drawing standards']
  },
  {
    id: 'engineering-drawing-beginners',
    title: 'Engineering Drawing for Beginners',
    description: 'Complete introduction to engineering drawing conventions, symbols, and standards used in professional technical documentation.',
    category: 'engineering',
    subcategory: 'Technical Drawing for Beginners',
    difficulty: 'Beginner',
    duration: '8 weeks',
    lessonCount: 24,
    price: 64.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8eadfdb5-1c43-46a4-939e-0814c745da79.png',
    instructor: 'Prof. Lisa Anderson',
    rating: 4.8,
    studentsEnrolled: 1200,
    isFree: false,
    freeLessonsCount: 3,
    curriculum: [],
    features: ['Engineering conventions', 'Symbol libraries', 'Drawing standards', 'Professional practices'],
    requirements: ['High school math', 'Interest in engineering'],
    learningOutcomes: ['Read engineering drawings', 'Create technical documentation', 'Apply industry standards']
  },
  {
    id: 'orthographic-projections-master',
    title: 'Orthographic Projections Mastery',
    description: 'Master the art of orthographic projection, including multiple views, sectional views, and auxiliary projections for complex objects.',
    category: 'engineering',
    subcategory: 'Orthographic Projections',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    lessonCount: 21,
    price: 74.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c653a8c-70e7-4a98-ae66-b3eb67441297.png',
    instructor: 'James Mitchell',
    rating: 4.9,
    studentsEnrolled: 650,
    isFree: false,
    freeLessonsCount: 2,
    curriculum: [],
    features: ['Multiple view drawing', 'Sectional views', 'Auxiliary projections', '3D visualization'],
    requirements: ['Basic drawing skills', 'Spatial reasoning ability'],
    learningOutcomes: ['Create orthographic projections', 'Visualize 3D objects', 'Master projection techniques']
  },
  {
    id: 'autocad-introduction',
    title: 'Introduction to AutoCAD',
    description: 'Get started with AutoCAD software for professional technical drawing. Learn basic commands, drawing techniques, and workflow optimization.',
    category: 'engineering',
    subcategory: 'Introduction to AutoCAD',
    difficulty: 'Beginner',
    duration: '10 weeks',
    lessonCount: 30,
    price: 89.99,
    currency: 'USD',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f9b7504-e057-40db-bc2a-957a34372937.png',
    instructor: 'Maria Garcia',
    rating: 4.8,
    studentsEnrolled: 1800,
    isFree: false,
    freeLessonsCount: 4,
    curriculum: [],
    features: ['AutoCAD interface mastery', 'Basic drawing commands', 'Layer management', 'Plotting and printing'],
    requirements: ['Computer with AutoCAD access', 'Basic computer skills'],
    learningOutcomes: ['Navigate AutoCAD interface', 'Create technical drawings', 'Optimize drawing workflow']
  }
];

// Combine all courses
export const allCourses: Course[] = [...englishCourses, ...engineeringCourses];

// Helper functions
export const getCoursesByCategory = (category: 'english' | 'engineering'): Course[] => {
  return allCourses.filter(course => course.category === category);
};

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id);
};

export const getFeaturedCourses = (): Course[] => {
  return allCourses.filter(course => course.rating >= 4.8).slice(0, 6);
};