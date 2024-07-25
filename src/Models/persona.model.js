import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

// Pasa la instancia de mongoose a AutoIncrementFactory
const AutoIncrement = AutoIncrementFactory(mongoose);

const personaSchema = new mongoose.Schema({
    nPerCode: {
        type: Number,
        default: 0,
    },
    cPerLastname: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50,
    },
    cPerName: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50,
    },
    cPerAddress: {
        type: String,
        require: true,
        trim: true,
        maxlength: 100,
    },
    cPerDateBorn: {
        type: Date,
        default: Date.now,
    },
    cPerYears: {
        type: Number,
        require: true,
        trim: true,
    },
    cPerSalary: {
        type: mongoose.Types.Decimal128,
        require: true,
        trim: true,
    },
    cPerRnd: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50,
    },
    cPerState: {
        type: String,
        require: true,
        trim: true,
        maxlength: 1,
    },
    remember_token: {
        type: String,
        require: true,
        trim: true,
        maxlength: 200,
    },
    /* created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }, */


}, {
    timestamps: true,
});

/* personaSchema.pre('save', function (next) {
    this.promnotes = (this.noteone + this.notetwo) / 2;
    this.condicion = this.promnotes >= 14 ? 'APROBADO' : 'DESAPROBADO';
    next();
});
 */

personaSchema.plugin(AutoIncrement, { inc_field: 'nPerCode' });
export default mongoose.model('Persona', personaSchema)