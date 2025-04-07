
export const EnvConfiguration = () => ({
   enviroment: process.env.NODE_ENV || 'dev',
   mongodb: process.env.MONGODB,
   port: process.env.PORT || 3002,
   defaultLimit: process.env.DEFAUTL_LIMIT || 7,
}) 