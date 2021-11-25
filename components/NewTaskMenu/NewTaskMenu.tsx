import styled from "styled-components";
import { useRef, useEffect, RefObject } from "react";
import { Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { ColorRadioButton, ColorRadioButtons } from "./ColorRadioButtons";
import { contentContainer } from "../../theme/mixins";

interface NewTaskMenuProps {
  className?: string;
  addTask: (taskName: string, color: string) => void;
  setNewTaskMenuActive: (val: boolean) => void;
  headerRef: RefObject<HTMLElement>;
}

const NewTaskMenuSchema = Yup.object().shape({
  taskName: Yup.string().required("Enter a name for your task"),
  color: Yup.string().required("Select a colour for your task"),
});

const colors = [
  "#544FF4",
  "#EB80C3",
  "#5BBB89",
  "#34407B",
  "#82F0F3",
  "#E9B44D",
];

const NewTaskMenu = ({
  className,
  addTask,
  setNewTaskMenuActive,
  headerRef
}: NewTaskMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        (ref.current && ref.current.contains(e.target as Node)) ||
        (headerRef.current && headerRef.current.contains(e.target as Node))
      ) {
        return;
      }
      setNewTaskMenuActive(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <motion.div
      className={className}
      initial={{ y: -500, opacity: 0, pointerEvents: "none" }}
      animate={{ y: 0, opacity: 1, pointerEvents: "all" }}
      exit={{ y: -500, opacity: 0, pointerEvents: "none" }}
      ref={ref}
      transition={{
        stiffness: 100,
        ease: "easeOut",
        duration: 0.3,
        when: "beforeChildren",
      }}
    >
      <Formik
        initialValues={{
          taskName: "",
          color: "",
        }}
        validationSchema={NewTaskMenuSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addTask(values.taskName, values.color);
          setNewTaskMenuActive(false);
          setTimeout(() => {
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting,
          setFieldValue,
        }) => (
          <>
            <form>
              <input
                type="text"
                placeholder="What do you need to do?.."
                name="taskName"
                value={values.taskName}
                onChange={handleChange}
                onBlur={handleBlur}
                /* hasError={!!(errors.firstName && touched.firstName)}
                error={errors.firstName} */
              />
              <div>
                <h3>Let’s keep it organised, pick a colour?</h3>
                <ColorRadioButtons>
                  {colors.map((color) => (
                    <ColorRadioButton key={color} color={color}>
                      <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        checked={values.color === color}
                        onChange={() => setFieldValue("color", color)}
                      />
                      <label htmlFor={color} />
                    </ColorRadioButton>
                  ))}
                </ColorRadioButtons>
              </div>
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={isSubmitting}
              >
                Submit task
              </button>
            </form>
          </>
        )}
      </Formik>
    </motion.div>
  );
};

const StyledNewTaskMenu = styled(NewTaskMenu)`
  position: fixed;
  top: 0;
  left: 0;
  background: var(--lightBlueBg);
  height: auto;
  width: 100%;
  z-index: var(--z-modal);

  > form {
    ${contentContainer}
    margin-top: var(--px120);

    > input,
    > div > h3 {
      font-size: var(--px23);
      text-align: center;
      width: 100%;
      color: black;
      margin: var(--px26) 0;

      &::placeholder {
        color: black;
      }
    }

    > button {
      margin: var(--px54) auto;
      display: block;
      font-size: var(--px23);
      background: white;
      height: 40px;
      border-radius: 20px;
      padding: 0 20px;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default StyledNewTaskMenu;
