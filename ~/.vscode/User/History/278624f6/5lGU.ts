import App from '@/app';
import request from 'supertest';
import { prismaMock } from '@/test/prisma';
import { comparePassword } from '@/lib/bcrypt';

const requestBody = {
  email: 'user@mail.com',
  password: 'SecurePassword!',
};

jest.mock('@/lib/bcrypt', () => ({
  comparePassword: jest.fn().mockResolvedValue(true),
}));

describe('POST /auth/login', () => {
  const { app } = new App();

  it('should login successfully', async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce({
      id: 1,
      name: 'mock name',
      email: 'mock email',
      password: 'mock password',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('login success');
    expect(response.body.data).toBeDefined();
    expect(response.body.token).toBeDefined();
  });

  it('should return error if email not found', async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(500);
    expect(response.text).toBe('invalid email address');
  });

  it('should return error if password not match', async () => {
    prismaMock.user.findFirst.mockResolvedValueOnce({
      id: 1,
      name: 'mock name',
      email: 'mock email',
      password: 'mock password',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    (comparePassword as jest.Mock).mockResolvedValueOnce(false);

    const response = await request(app)
      .post('/api/auth/login')
      .send(requestBody);

    expect(response.status).toBe(500);
    expect(response.text).toBe('incorrect password');
  });
});
