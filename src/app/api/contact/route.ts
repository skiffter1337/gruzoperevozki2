import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    fromAddress?: string;
    fromFloor?: string;
    fromHasLift?: boolean;
    fromNeedCrane?: boolean;
    toAddress?: string;
    toFloor?: string;
    toHasLift?: boolean;
    toNeedCrane?: boolean;
    date?: string;
    needPacking?: boolean;
    needAssembly?: boolean;
    comment?: string;
}

export async function POST(request: NextRequest) {
    try {
        const formData: ContactFormData = await request.json();

        const fromEmail = process.env.NODE_ENV === 'development'
            ? 'onboarding@resend.dev'
            : 'info@shor-hovalot.co.il';

        const {data, error} = await resend.emails.send({
            from: `Bull Moving <${fromEmail}>`,
            to: process.env.EMAIL_TO || 'bullmovings@gmail.com',
            subject: `Новая заявка на переезд от ${formData.name || 'Клиент'}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1890ff; text-align: center; margin-bottom: 30px;">🎯 Новая заявка на переезд</h2>
            
            <div style="background: #1890ff; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px;">👤 Контактная информация</h3>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Имя:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.name || 'Не указано'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Телефон:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.phone || 'Не указан'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.email || 'Не указан'}</td>
              </tr>
            </table>

            <div style="background: #1890ff; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px;">📍 Адрес отправления</h3>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Адрес:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.fromAddress || 'Не указан'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Этаж:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.fromFloor || 'Не указан'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Лифт:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.fromHasLift ? '✅ Да' : '❌ Нет'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Нужен кран:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.fromNeedCrane ? '✅ Да' : '❌ Нет'}</td>
              </tr>
            </table>

            <div style="background: #1890ff; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px;">🎯 Адрес назначения</h3>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Адрес:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.toAddress || 'Не указан'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Этаж:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.toFloor || 'Не указан'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Лифт:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.toHasLift ? '✅ Да' : '❌ Нет'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Нужен кран:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.toNeedCrane ? '✅ Да' : '❌ Нет'}</td>
              </tr>
            </table>

            <div style="background: #1890ff; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px;">📅 Дополнительные услуги</h3>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Дата переезда:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.date || 'Не указана'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Упаковка:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.needPacking ? '✅ Да' : '❌ Нет'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Сборка/разборка мебели:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.needAssembly ? '✅ Да' : '❌ Нет'}</td>
              </tr>
            </table>

            ${formData.comment ? `
            <div style="background: #1890ff; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px;">💬 Комментарий клиента</h3>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #1890ff; margin-bottom: 25px;">
              <p style="margin: 0; color: #555; font-style: italic;">${formData.comment}</p>
            </div>
            ` : ''}

            <div style="text-align: center; color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p>📧 Отправлено: ${new Date().toLocaleString('ru-RU')}</p>
              <p>🏠 Bull Moving - Перевозка квартир и домов с профессиональным и качественным обслуживанием</p>
            </div>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({
                success: false,
                error: error.message
            }, {status: 500});
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
            data
        });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({
            success: false,
            error: 'Internal server error'
        }, {status: 500});
    }
}