package org.softwire.training.api.routes.v1;

import org.softwire.training.api.models.FailedRequestException;
import spark.Request;
import spark.Response;

import java.util.List;

public interface EntityCRUDRoutes {

    Object createEntity(Request req, Response res) throws Exception;
    Object readEntity(Request req, Response res, int id) throws Exception;
    Object readEntities(Request req, Response res) throws Exception;
    Object updateEntity(Request req, Response res, int id) throws Exception;
    Object deleteEntity(Request req, Response res, int id) throws Exception;
}
