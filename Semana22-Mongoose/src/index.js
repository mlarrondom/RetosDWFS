require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const Event = require("./models/Events");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("ok");
}); // http://localhost:3000


app.get("/events", async (req, res) => {
    try {
        const events = await Event.find({});
        return res.status(200).json({events});
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al obtener el listado de eventos",
            error: error.message
        })
    }
});

app.post("/events", async (req, res) => {
    try {
        const {title, description, date, location} = req.body;
        const newEvent = await Event.create({title, description, date, location});
        
        if(!newEvent) return res.status(400).json({error: "No fue posible crear el evento"});

        return res.status(201).json({datos: newEvent});
    } catch (error) {
            return res.status(500).json({
            message: "Hubo un error al crear el evento",
            error: error.message
        })
    }
})

app.put("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, location } = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { title, description, date, location },
            {
                new: true,          // devuelve el evento actualizada
                runValidators: true // aplica reglas del schema
            }
        );

        if (!updatedEvent) {
            return res.status(404).json({
                error: "Evento no encontrado"
            });
        }

        return res.status(200).json({
            datos: updatedEvent
        });

    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al actualizar el evento",
            error: error.message
        });
    }
});

app.delete("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({
                error: "Evento no encontrado"
            });
        }

        return res.status(200).json({
            message: "Evento eliminada correctamente",
            datos: deletedEvent
        });

    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al eliminar el evento",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto", PORT);
});
