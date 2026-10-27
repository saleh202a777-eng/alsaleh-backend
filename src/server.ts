import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// تفعيل حماية الرؤوس HTTP
app.use(helmet());

// ضبط الـ CORS والسماح للطلبات
app.use(cors({
  origin: '*', // سنقوم بضبوطاتها لاحقاً عند ربط التطبيق
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// مسار تجريبي للتأكد من عمل الخادم
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'success', message: 'خادم منظومة الصالح التعليمية يعمل بنجاح وبأمان في السحاب!' });
});

app.listen(PORT, () => {
  console.log(`الخادم يعمل حالياً على المنفذ: ${PORT}`);
});
