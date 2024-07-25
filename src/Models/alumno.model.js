import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
    },
    course: {
        type: String,
        require: true,
        trim: true,
    },
    noteone: {
        type: Number,
        require: true,
        trim: true,
    },
    notetwo: {
        type: Number,
        require: true,
        trim: true,
    },

    promnotes: {
        type: Number,
    },

    condicion: {
        type: String,
    },

    registrationDate: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true,
});

alumnoSchema.pre('save', function (next) {
    this.promnotes = (this.noteone + this.notetwo) / 2;
    this.condicion = this.promnotes >= 14 ? 'APROBADO' : 'DESAPROBADO';
    next();
});

export default mongoose.model('Alumno', alumnoSchema)