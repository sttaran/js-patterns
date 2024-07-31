class SingletonTester
{
    static isSingleton(generator)
    {
        return generator() === generator()
    }
}