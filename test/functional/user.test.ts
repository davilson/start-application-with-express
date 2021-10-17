describe('User functional tests', () => {
  it('should return user after create', async () => {
    const { body, status } = await global.supertestServer.post('/users').send({
      firstname: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com.br',
      password: 'asecretpassfromjohndoe',
    });
    expect(status).toBe(201);
    expect(body.email).toBe('johndoe@email.com.br');
  });
});
