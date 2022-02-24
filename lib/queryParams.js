import { gql } from '@apollo/client'

export const GET_APPTS = gql`
    query getAppointments($params: appointment_bool_exp!) {
      appointment(where: $params) {
        appointment_id
        appt_date
        appt_time
        consulting_doctor
        doctorByConsultingDoctor {
          doctor_id
          doctor_name
        }
        visiting_patient
        patientByVisitingPatient {
          patient_name
          patient_age
          patient_gender
        }
      }
    }`

export const GET_PATIENTS = gql`query getPatients {
      patient {
        patient_id
        patient_name
        patient_age
        patient_gender
      }
    }`

export const GET_DOCTORS = gql`query getDoctors {
      doctor {
        doctor_id
        doctor_name
      }
    }`