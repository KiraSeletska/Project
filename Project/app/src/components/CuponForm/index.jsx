import styles from './styles.module.css'
import gnome from "../../images/gnome.svg"
import { useForm, Controller } from "react-hook-form";

export const CuponForm = () => {
    const { handleSubmit, control, setValue } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://127.0.0.1:3333/sale/send", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
            } else {
                console.log('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error occurred while submitting form data:', error);
        }

    };

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        setValue('phone', phoneValue.startsWith('+49') ? phoneValue : `+49${phoneValue}`);
    };
    return(
        <div className={styles.wrapper}>
            <section className={styles.centeringSection}>
                <img className={styles.image} src={gnome} alt="gnome" />
                <div className={styles.form}>
                    <div className={styles.text}>
                        <span>5% off </span><br/>on the first order</div>
                    <form onSubmit={()=>handleSubmit(onSubmit)}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue="+49"
                            render={({ field, fieldState: { error } }) => (
                                <div className={styles.inputWrapper}>
                                    <input
                                        {...field}
                                        className={styles.input}
                                        type="tel"
                                        onChange={handlePhoneChange}
                                        maxLength={14}
                                    />
                                    {error && <span>Phone number is required.</span>}
                                </div>
                            )}
                        />
                        <button className={styles.button} type="submit">Get a discount</button>
                    </form>
                </div>
            </section>
        </div>
    )
}