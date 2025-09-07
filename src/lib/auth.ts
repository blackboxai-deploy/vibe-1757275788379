export interface User {
  id: string;
  email: string;
  name: string;
  joinDate: string;
  enrolledCourses: string[];
  completedLessons: string[];
  certificates: string[];
  progress: Record<string, number>;
  subscription: 'free' | 'premium';
  language: 'en' | 'ar';
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

// Mock user data for demonstration
const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'demo@example.com',
    name: 'Demo User',
    joinDate: '2024-01-01',
    enrolledCourses: ['english-grammar-fundamentals', 'autocad-introduction'],
    completedLessons: ['grammar-01', 'grammar-02'],
    certificates: [],
    progress: {
      'english-grammar-fundamentals': 15,
      'autocad-introduction': 8
    },
    subscription: 'premium',
    language: 'en'
  }
];

// Authentication functions
export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock authentication - in real app, this would be API call
  const user = mockUsers.find(u => u.email === email);
  
  if (user && password === 'demo123') {
    const token = generateMockToken(user.id);
    return {
      success: true,
      user,
      token
    };
  }

  return {
    success: false,
    error: 'Invalid email or password'
  };
};

export const registerUser = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return {
      success: false,
      error: passwordValidation.message
    };
  }

  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return {
      success: false,
      error: 'User with this email already exists'
    };
  }

  // Create new user
  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    name,
    joinDate: new Date().toISOString().split('T')[0],
    enrolledCourses: [],
    completedLessons: [],
    certificates: [],
    progress: {},
    subscription: 'free',
    language: 'en'
  };

  mockUsers.push(newUser);
  const token = generateMockToken(newUser.id);

  return {
    success: true,
    user: newUser,
    token
  };
};

export const getCurrentUser = async (token: string): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    const userId = parseMockToken(token);
    const user = mockUsers.find(u => u.id === userId);
    return user || null;
  } catch (error) {
    return null;
  }
};

export const updateUserProgress = async (userId: string, courseId: string, lessonId: string): Promise<boolean> => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) return false;

  // Add lesson to completed lessons if not already there
  if (!user.completedLessons.includes(lessonId)) {
    user.completedLessons.push(lessonId);
  }

  // Update course progress (mock calculation)
  const totalLessons = 24; // This would come from course data
  const completedInCourse = user.completedLessons.filter(l => l.startsWith(courseId.split('-')[0])).length;
  user.progress[courseId] = Math.round((completedInCourse / totalLessons) * 100);

  return true;
};

export const enrollInCourse = async (userId: string, courseId: string): Promise<boolean> => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) return false;

  if (!user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId);
    user.progress[courseId] = 0;
  }

  return true;
};

// Helper functions
const generateMockToken = (userId: string): string => {
  // In real app, use proper JWT
  return btoa(JSON.stringify({ userId, exp: Date.now() + 24 * 60 * 60 * 1000 }));
};

const parseMockToken = (token: string): string => {
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp < Date.now()) {
      throw new Error('Token expired');
    }
    return decoded.userId;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

// Local storage helpers
export const saveAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

// Form validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; message: string } => {
  if (password.length < 6) {
    return { isValid: false, message: 'Password must be at least 6 characters long' };
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Password must contain both uppercase and lowercase letters' };
  }
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  return { isValid: true, message: 'Password is valid' };
};